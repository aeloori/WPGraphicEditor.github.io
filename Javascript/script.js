let preloader=document.getElementById("preloader");


document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('#fileSystemList > div > button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentDiv = button.nextElementSibling;

            if (contentDiv.style.display === 'block') {
                contentDiv.style.display = 'none';
            } else {
                document.querySelectorAll('#fileSystemList .content').forEach(content => {
                    content.style.display = 'none';
                });

                contentDiv.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', (event) => {
        const isClickInside = document.querySelector('#fileSystemList').contains(event.target);

        if (!isClickInside) {
            document.querySelectorAll('#fileSystemList .content').forEach(content => {
                content.style.display = 'none';
            });
        }
    });
});

window.addEventListener("load",function(){
    preloader.style.display="none";
})

