const video = document.getElementById('viideo')

function startVideo()
{
    navigator.getUserMedia(
        { video: {} },
        stream => video.scrObject = stream, err => console.error(err)
    )
}

startVideo()
