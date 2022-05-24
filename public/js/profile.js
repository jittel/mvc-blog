console.log("hello")
document.querySelector("#newBlog").addEventListener("submit", e => {
    e.preventDefault();
    const blogObj = {
        title: document.querySelector("#title").value,
        body: document.querySelector("#body").value,
    }
    fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify(blogObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

document.querySelector(".deleteBtn").addEventListener("click", e => {
    e.preventDefault();

    //needs a way to dynamically get id
    let id = '';
    fetch(`/api/blogs/${id}`, {
        method: "DELETE"
    }).then(res => {
        location.reload()
    })
})