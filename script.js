const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/enviar_correo', async(req, res) => {
    const { nombre, apellido, correo, mensaje } = req.body;

    if (!nombre || !apellido || !correo || !mensaje) {
        return res.status(400).send('Todos los campos son obligatorios');
    }
    const express = require('express');
    const nodemailer = require('nodemailer');
    const app = express();

    app.use(express.urlencoded({ extended: true }));

    app.post('/enviar_correo', async(req, res) => {
        const { nombre, apellido, correo, mensaje } = req.body;

        if (!nombre || !apellido || !correo || !mensaje) {
            return res.status(400).send('Todos los campos son obligatorios');
        }

        // Configuración del transporte de correo
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'alejotomepellegrini@gmail.com',
                pass: '41108800Dni',
            },
        });

        // Opciones del correo
        let mailOptions = {
            from: correo, // Utiliza la dirección de correo proporcionada por el usuario
            to: 'alejotomepellegrini@gmail.com',
            subject: 'Mensaje de contacto',
            text: `Nombre: ${nombre} ${apellido}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
        };

        // Enviar el correo
        try {
            await transporter.sendMail(mailOptions);
            res.redirect('/gracias');
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).send('Error al enviar el correo');
        }
    });

    app.get('/gracias', (req, res) => {
        res.send('<h1>Gracias por enviar tu mensaje. ¡Te responderemos pronto!</h1>');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });


    // Enviar el correo
    await transporter.sendMail(mailOptions);
    res.redirect('/gracias');
});

app.get('/gracias', (req, res) => {
    res.send('<h1>Gracias por enviar tu mensaje. ¡Te responderemos pronto!</h1>');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});