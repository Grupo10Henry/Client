/*
La función login deberá verificar el email y el password del usuraio haciendo un post
a la ruta
http://localhost:3001/login
de la cual recibirá un token que deberá guardar en localStorage
luego, deberá verificar en la ruta
http://localhost:3001/user
si el usuario es admin true o false.
Si es admin, deberá redirigir a la ruta /admin
Si no es admin, concederá el acceso, y lo dirijirá a la ruta /
si no existe deberá mostrar un mensaje de error

el controlador de la ruta /login es:
const loginController = async (email, password) => {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign(
        { id: user.id, email: user.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
    );

    return token;
}


*/

const login = async (user) => {
    const { email, password } = user;
    const URL = "http://localhost:3001/login";
    try {
        const res = await axios.post(URL, { email, password });
        const token = res.data.token;

        if (token) {
            localStorage.setItem("token", token);
            const URL = "http://localhost:3001/user";
            const res = await axios.get(URL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const user = res.data;
            if (user.admin) {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } catch (error) {
        console.error(error.response); // Muestra la respuesta del servidor en la consola
        alert("Error en el inicio de sesión");
    }
};
    