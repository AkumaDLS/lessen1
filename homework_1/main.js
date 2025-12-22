document.addEventListener('DOMContentLoaded', function() {
    const button_name_aditer = document.querySelector('#name-aditer');
    const div_teacher_name = document.querySelector('#teacher-name');

    button_name_aditer.addEventListener('click', function(e) {
        e.preventDefault();

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'введите имя';
        input.maxLength = 10;

        Object.assign(input.style, {
            background: '#A7AEB833',
            border: 'none',
            outline: 'none',
            padding: '4px 8px 4px 8px',
            fontSize: '14px',
            borderRadius: '8px 0 0 8px',
            width: '229px',
            display: 'inline-block',
            marginRight: '-12px'
        });

        const applyBtn = document.createElement('button');
        applyBtn.innerText = 'сохранить';

        Object.assign(applyBtn.style, {
            background: '#FF9130',
            border: 'none',
            padding: '4px 8px 4px 8px',
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '0 8px 8px 0',
            display: 'inline-block'
        });

        div_teacher_name.replaceWith(input);
        button_name_aditer.style.display = 'none';
        button_name_aditer.insertAdjacentElement('beforebegin', applyBtn);

        applyBtn.addEventListener('click', function() {
            div_teacher_name.innerText = input.value;
            input.replaceWith(div_teacher_name);
            button_name_aditer.style.display = 'inline';
            applyBtn.remove();
        });
    });
});
