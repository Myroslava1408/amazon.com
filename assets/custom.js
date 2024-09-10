
// Storing and displaying answers in the console
let userResponses = {};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.survey_button').forEach(button => {
        button.addEventListener('click', event => {
            let btn = event.target.closest('.survey_button');
            if (!btn) return;

            let questionId = btn.parentNode.id;
            userResponses[questionId] = btn.textContent.trim();

            document.querySelectorAll(`#${questionId} .survey_button`).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    document.getElementById('p_modal_button3')?.addEventListener('click', () => {
        console.log('Saved answers:', userResponses);
    });
});



//Add new comments
document.addEventListener('DOMContentLoaded', function() {
    let commentButton = document.querySelector('.comment_button');
    let commentSection = document.getElementById('comment_section');
    let commentsDisplay = document.getElementById('comments_display');

    commentButton.addEventListener('click', function() {
        if (commentSection.style.display === 'none' || commentSection.style.display === '') {
            commentSection.style.display = 'block';
        } else {
            commentSection.style.display = 'none';
        }
    });

    let publishButton = document.getElementById('publish_button');

    publishButton.addEventListener('click', function() {
        let commentText = document.getElementById('comment_text').value;
        if (commentText.trim() !== '') {
            let commentItem = document.createElement('div');
            commentItem.className = 'comment-item';
            commentItem.textContent = 'Anónimo: ' + commentText;

            commentsDisplay.appendChild(commentItem);

            if (!commentsDisplay.classList.contains('comments')) {
                commentsDisplay.classList.add('comments');
            }

            document.getElementById('comment_text').value = '';
            commentSection.style.display = 'none';
        } else {
            alert('Por favor, introduza um comentário.');
        }
    });
});


