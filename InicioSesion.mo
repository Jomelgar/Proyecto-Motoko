import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Option "mo:base/Option";

actor {

    // Definir la estructura de usuario
    type User = {
        username: Text;
        password: Text;
        email: Text;
    };

    // Lista de usuarios predefinidos
    var users: [User] = [
        {
            username = "user1";
            password = "pass1";
            email = "user1@example.com";
        },
        {
            username = "user2";
            password = "pass2";
            email = "user2@example.com";
        }
    ];

    // Función para autenticarse
    public func login(username: Text, password: Text): ?User {
        let userOpt = Array.find<User>(users, func (user) : Bool {
            user.username == username and user.password == password
        });

        switch (userOpt) {
            case (?user) {
                Debug.print("Login successful for user: " # username);
                return ?user;
            };
            case null {
                Debug.print("Login failed for user: " # username);
                return null;
            };
        };
        return null;
    };
    // Función para registrar un nuevo usuario
    public func register(username: Text, password: Text, email: Text): Bool {
        // Verificar que el nombre de usuario no esté ya tomado
        if (Array.exists<User>(users, func (user) : Bool {
            user.username == username
        })) {
            Debug.print("Username already taken: " # username);
            return false;
        } else {
            let newUser: User = {
                username = username;
                password = password;
                email = email;
            };
            users := Array.append<User>(users, [newUser]);
            Debug.print("User registered successfully: " # username);
            return true;
        }
    };
};
