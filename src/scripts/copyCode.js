
document.querySelectorAll('pre').forEach((pre) => {

  pre.addEventListener('mouseenter', function() {
    pre.classList.add("visible")
  })
  pre.addEventListener('mouseleave', function() {
    pre.classList.remove("visible")
  })


  const btnCopy = document.createElement("button")

  btnCopy.classList.add("btnCopy")

  btnCopy.textContent = "copy"
  btnCopy.addEventListener('click', function() {
    let onlyCode = pre.querySelector('code').textContent
    setClipboard(onlyCode)
  })


  pre.append(btnCopy)
})


async function setClipboard(text) {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: text,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}

