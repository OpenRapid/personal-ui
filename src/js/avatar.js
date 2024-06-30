let avatars = document.querySelectorAll('.pui-avatar.function');
for (let i = 0; i < avatars.length; i++) {
    let avatar = avatars[i];
    let parent = avatar.parentElement;
    let parentHeight = parent.offsetHeight;
    let leftOffset = -(parentHeight) - parentHeight*0.125;
    avatar.style.left = `${leftOffset}px`;
    let topOffset = (parentHeight) - parentHeight*0.125;
    avatar.style.top = `${topOffset}px`;
    let fontSize = avatar.offsetHeight * 0.733;
    avatar.style.fontSize = `${fontSize}px`;
}

