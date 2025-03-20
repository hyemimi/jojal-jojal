  // 이메일 유효성 검사 함수
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default validateEmail;
