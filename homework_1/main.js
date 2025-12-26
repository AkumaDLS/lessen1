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
            div_teacher_name.innerText = input.value || 'ИМЯ';
            input.replaceWith(div_teacher_name);
            button_name_aditer.style.display = 'inline';
            applyBtn.remove();
        });

        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyBtn.click();
            }
        });
    });

    const toolsContainer = document.querySelector('.tools');
    const cello = document.querySelector('.teacher-cellist');

    const toolRow = document.createElement('div');
    toolRow.className = 'tool-row';

    const existingLinks = toolsContainer.querySelectorAll('a[href]');
    existingLinks.forEach(link => toolRow.appendChild(link));

    toolsContainer.appendChild(toolRow);

    const inputInstrument = document.createElement('input');
    inputInstrument.type = 'text';
    inputInstrument.placeholder = 'новый инструмент';
    inputInstrument.maxLength = 20;

    Object.assign(inputInstrument.style, {
        background: '#A7AEB833',
        border: 'none',
        outline: 'none',
        padding: '4px 8px',
        fontSize: '14px',
        borderRadius: '8px 0 0 8px',
        width: '140px',
        display: 'inline-block'
    });

    const addButton = document.createElement('button');
    addButton.innerText = '+';
    Object.assign(addButton.style, {
        background: '#FF9130',
        border: 'none',
        padding: '4px 10px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '0 8px 8px 0',
        display: 'inline-block'
    });

    toolRow.appendChild(inputInstrument);
    toolRow.appendChild(addButton);

    function updateInputVisibility() {
        const count = toolRow.querySelectorAll('a[href]').length;
        if (count >= 10) {
            inputInstrument.remove();
            addButton.remove();
        }
    }

    updateInputVisibility();

    addButton.addEventListener('click', function() {
        const value = inputInstrument.value.trim();
        if (!value) return;

        const newInstrument = document.createElement('a');
        newInstrument.href = '#';
        newInstrument.textContent = value;
        newInstrument.className = 'teacher-custom';
        Object.assign(newInstrument.style, {
            display: 'inline-block',
            background: 'rgba(167, 174, 184, 0.2)',
            padding: '4px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            textDecoration: 'none',
            color: '#000',
            whiteSpace: 'nowrap'
        });

        cello.insertAdjacentElement('afterend', newInstrument);

        inputInstrument.value = '';

        updateInputVisibility();
    });

    inputInstrument.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});