const playVideo = (triggerButton, overlaySelector, closeSelector) => {
    
    const trigger = document.querySelector(triggerButton);
    const overlay = document.querySelector(overlaySelector);
    const close = document.querySelector(closeSelector);
    
    
    function bindTriggers() {
        trigger.addEventListener('click', () => {
    
            if (document.querySelector('iframe#frame')) {
                overlay.style.display = 'block';
            } else {
                const path = trigger.getAttribute('data-url');
                createPlayer(path);
            }
        });
    };
    
    function bindCloseBtn() {
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
    
            player.stopVideo();
        });
    };
    
    function closeOverlay() {
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
    
            player.stopVideo();
        });
    }
    
    closeOverlay();
    
    
    let player;
    
    function createPlayer(url) {
        player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
    
        overlay.style.display = 'block';
    };
    
    function init() {
        const tag = document.createElement('script');
    
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
        bindTriggers();
        bindCloseBtn();
    };
    
    try {
        init();
        createPlayer();
        bindTriggers();
        closeOverlay();
    } catch (error) {}

};

export default playVideo;

