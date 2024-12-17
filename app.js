document.addEventListener("DOMContentLoaded", () => {
    const photoItems = document.querySelectorAll(".photo-item img");
    const modal = document.getElementById("photo-modal");
    const modalPhoto = document.getElementById("modal-photo");
    const modalComment = document.getElementById("photo-comment");
    const modalDate = document.getElementById("photo-date");
    const closeModal = document.getElementById("close-modal");

    // 사진 클릭 이벤트
    photoItems.forEach((photo) => {
        photo.addEventListener("click", () => {
            const src = photo.src;
            const comment = photo.getAttribute("data-comment");
            const date = photo.getAttribute("data-date");

            modalPhoto.src = src;
            modalComment.textContent = comment;
            modalDate.textContent = date;

            modal.classList.remove("hidden");
        });
    });

    // 모달 닫기 이벤트
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // 모달 바깥 클릭 시 닫기
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});