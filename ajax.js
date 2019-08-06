(()=>{
    $('#registration').submit(function(e) {
        let form = $(this);
       // console.log(form);
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            success: function (result) {
                location.href = "./company.html"}
        })
    });
})();
