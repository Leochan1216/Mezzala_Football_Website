// document.addEventListener("DOMContentLoaded", () => {
//     const searchInput = document.getElementById("search-input");
//     const searchBtn = document.getElementById("search-btn");
//     const pageNumber = document.getElementById("page-number");
//     let currentPage = 1;

//     // Search functionality
//     searchBtn.addEventListener("click", () => {
//         alert(`Searching for: ${searchInput.value}`);
//     });

//     // Pagination controls
//     document.getElementById("prev-page").addEventListener("click", () => {
//         if (currentPage > 1) {
//             currentPage--;
//             pageNumber.innerText = currentPage;
//         }
//     });

//     document.getElementById("next-page").addEventListener("click", () => {
//         currentPage++;
//         pageNumber.innerText = currentPage;
//     });

//     // Sorting buttons
//     document.getElementById("latest-btn").addEventListener("click", () => {
//         alert("Sorting by latest posts...");
//     });

//     document.getElementById("most-viewed-btn").addEventListener("click", () => {
//         alert("Sorting by most viewed posts...");
//     });
// });
