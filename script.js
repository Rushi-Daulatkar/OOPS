function copyCode(button) {
    const code = button.parentElement.getAttribute('data-code');
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('HO GAYA COPY AAB TENSION MAT LE');
}
//Function created by Rushi Daulatkar....