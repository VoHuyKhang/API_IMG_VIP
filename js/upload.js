document.addEventListener('DOMContentLoaded', function () {
    var ImgurClient = new Imgur({
        clientid: 'c8dd68bf721b5af', // Replace with your Imgur Client ID
        callback: feedback
    });

    function feedback(res) {
        if (res.success === true) {
            var get_link = res.data.link.replace(/^http:\/\//i, 'https://');

            var container = document.querySelector('.image-container');
            var imageItem = document.createElement('div');
            imageItem.classList.add('image-item');

            var image = document.createElement('img');
            image.src = get_link;
            image.alt = 'Uploaded Image';

            var input1 = createInput('Text', get_link, false);
            var input2 = createInput('Text', '![](' + get_link + ')', false);
            var input3 = createInput('Text', '<img src="' + get_link + '" alt="Uploaded Image">', false);

            imageItem.appendChild(image);
            imageItem.appendChild(input1);
            imageItem.appendChild(input2);
            imageItem.appendChild(input3);
            var inputFormats = ['.png', '.gif', '.jpe', '.jpeg'];
            inputFormats.forEach(function (format) {
                var input = createInput('Text', get_link.replace('.png', format), true);
                imageItem.appendChild(input);
            });

            container.appendChild(imageItem);
        }
    }

    function createInput(type, value, readOnly) {
        var input = document.createElement('input');
        input.type = type;
        input.value = value;
        input.readOnly = readOnly;
        input.style.width = '100%';
        input.style.marginTop = '10px';
        return input;
    }
});
