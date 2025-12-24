const form = document.getElementById("jobForm");
const loading = document.getElementById("loading");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", () => {
    // 로딩 표시
    loading.style.display = "flex";

    // 중복 제출 방지
    submitBtn.disabled = true;
});