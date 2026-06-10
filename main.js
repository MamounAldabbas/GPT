const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el);
});

document.querySelector("form").addEventListener("submit",(e)=>{
e.preventDefault();
alert("Inquiry submitted.");
});
