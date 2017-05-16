$(document).ready(function () {

    $("#loginForm").bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-zoom-in'
        },

        fields: {
            usuario: {//son los name
                validators: {
                    notEmpty: {
                        message: 'El nombre de usuario es requerido'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida'
                    }
                }
            }
        }
    });


});


