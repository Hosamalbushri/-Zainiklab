var PREVIEW_MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MiB (matches server PRODUCT_THUMBNAIL_MAX_FILE_KB)

function previewFile(input) {
    "use strict";

    var preview = input.previousElementSibling;
    var file = input.files[0];
    var reader = new FileReader();

    if (!file) {
        preview.src = "";
        return;
    }

    if (file.size > PREVIEW_MAX_FILE_BYTES) {
        input.value = "";
        alert("Maximum file size is 10 MB!");
    } else {
        reader.onloadend = function() {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
}

function preview815639DimensionsFile(input) {
    "use strict";

    var preview = input.previousElementSibling;
    var file = input.files[0];
    var reader = new FileReader();

    var img = new Image();
    img.src = window.URL.createObjectURL( file );

    reader.onloadend = function() {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}

function preview35DimensionsFile(input) {
    "use strict";

    var preview = input.previousElementSibling;
    var file = input.files[0];
    var reader = new FileReader();


    var img = new Image();
    img.src = window.URL.createObjectURL( file );

    reader.onloadend = function() {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}

function preview44DimensionsFile(input) {
    "use strict";

    var preview = input.previousElementSibling;
    var file = input.files[0];
    var reader = new FileReader();

    var img = new Image();
    img.src = window.URL.createObjectURL( file );


    reader.onloadend = function() {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}

function preview312369DimensionFile(input) {
    "use strict";

    var preview = input.previousElementSibling;
    var file = input.files[0];
    var reader = new FileReader();

    if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg')
    {
        var img = new Image();

        img.src = window.URL.createObjectURL( file );
        img.onload = function()
        {
            var width = this.naturalWidth,
                height = this.naturalHeight;

            if (width !== 312){
                preview.src = "";
                alert("Need to width is 312!");
                return
            }

            if (height !== 369){
                preview.src = "";
                alert("Need to height is 369!");
                return;
            }

        };

        if (file.size > PREVIEW_MAX_FILE_BYTES) {
            input.value = "";
            alert("Maximum file size is 10 MB!");
        } else {
            reader.onloadend = function() {
                preview.src = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                preview.src = "";
            }
        }
    } else {
        alert("Accepted file is jpg/jpeg/png.");
        return
    }


}

function preview125DimensionFile(input) {
    "use strict";

    var preview = input.previousElementSibling;
    var file = input.files[0];
    var reader = new FileReader();

    if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg')
    {
        var img = new Image();

        img.src = window.URL.createObjectURL( file );
        console.log(window.URL.createObjectURL( file ))
        img.onload = function()
        {
            var width = this.naturalWidth,
                height = this.naturalHeight;

            if (width !== 125){
                preview.src = "";
                input.value = ""
                alert("Need to width is 125!");
                return;
            }

            if (height !== 125){
                preview.src = "";
                input.value = ""
                alert("Need to height is 125!");
                return;
            }

        };

        if (file.size > PREVIEW_MAX_FILE_BYTES) {
            input.value = "";
            alert("Maximum file size is 10 MB!");
        } else {
            reader.onloadend = function() {
                preview.src = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                preview.src = "";
            }
        }
    } else {
        alert("Accepted file is jpg/jpeg/png.");
        return
    }


}
