let renderView = (content) => {

    let root = document.getElementById("root");
    root.insertAdjacentHTML('afterend', content);
}

export default renderView;
