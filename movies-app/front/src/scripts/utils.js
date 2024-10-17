export const addCardToContainer = (divContainer, CardTemplate) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = CardTemplate;

    divContainer.appendChild(tempDiv.firstElementChild);
}
