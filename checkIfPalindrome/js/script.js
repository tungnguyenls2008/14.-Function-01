function checkIfPalindrome(str) {
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            document.getElementById('display').innerHTML='"'+document.getElementById('paragraphToCheckIfPalindrome').value+'"'+' is NOT a Palindrome';
            return false;
        }
    }
    document.getElementById('display').innerHTML='"'+document.getElementById('paragraphToCheckIfPalindrome').value+'"'+' is a Palindrome';
    return true;
}