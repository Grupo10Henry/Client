

const Login = ({login}) => {

   /*
La función Login deberá permitir al usuario ingresar a la aplicación.
se deberá verificar en la ruta axios localhost:3001/user 
si el usuario existe y si la contraseña es correcta. 
Además, deberá verificarse si Admin es true o false.
En caso de false, se deberá redirigir al usuario a la ruta /
En caso de true, se deberá redirigir al usuario a la ruta /admin
El caso de no existir el usuario o de que la contraseña sea incorrecta deberá ser manejado con un alert.

El login deberá permitir al usuario ingresar con su cuenta de Google.
*/

const [user, setUser] = useState({
    email: '',
    password: ''
});

const handleChange = (event) => {
    setUser({
    ...user,
    [event.target.name]: event.target.value
    })
}

/* se deberá verificar en la ruta axios localhost:3001/user 
si el usuario existe y si la contraseña es correcta. 
Además, deberá verificarse si Admin es true o false.
En caso de false, se deberá redirigir al usuario a la ruta /
En caso de true, se deberá redirigir al usuario a la ruta /admin
El caso de no existir el usuario o de que la contraseña sea incorrecta deberá ser manejado con un alert.
*/

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:3001/login", user);
        if (response.status === 200) {
            alert("Usuario logueado correctamente");
            window.location.href = "/admin";
        }
    } catch (error) {
        if (error.response && error.response.data) {
            alert("Error: " + error.response.data.error);
        } else {
            alert("Ocurrió un error desconocido");
        }
    }


}


}