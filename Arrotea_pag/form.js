function validar(){
    var form = document.form;

    if(form.nombre.value==0){
        alert("El campo nombre está vacio");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }
    if(form.apellido.value==0){
        alert("El campo Apellido está vacio");
        form.apellido.value="";
        form.apellido.focus();
        return false;
    }

    if(form.telefono.value==0){
        alert("El campo Teléfono está vacio");
        form.telefono.value="";
        form.telefono.focus();
        return false;
    }

    if(form.mail.value==0){
        alert("El campo Mail está vacio");
        form.mail.value="";
        form.mail.focus();
        return false;
    }


    }
