const data = {
    currentUser: {
        image: {
            png: "/assets/images/Jesus1sss.jpg",
            webp: "/assets/images/Jesus1sss.jpg",


        },

        username: "Maximilian",


    },

    comments: [
        {
            parent: 0,
            id: 1,
            content:
                "we will be coming",
            createdAt: "1 month ago",
            score: 12,
            user: {
                image: {
                    png: "./assets/images/Jesus1sss.jpg",
                    webp: "./assets/images/Jesus1sss.jpg",

                },
                username: "anyrose",

            },
            replies: [],
        },
        {
            parent: 0,
            id: 2,
            content:
                "waaawuuuu will be coming",
            createdAt: "2 month ago",
            score: 5,
            user: {
                image: {
                    png: "./assets/images/Jesus1sss.jpg",
                    webp: "./assets/images/Jesus1sss.jpg",

                },
                username: "Timbaland",

            },

            replies: [
                {
                    parent: 2,
                    id: 1,
                    content:
                        "yesu   will be coming",
                    createdAt: "1 week ago",
                    score: 4,
                    replyingTo: "Maximilian",

                    user: {
                        image: {
                            png: "./assets/images/Jesus1sss.jpg",
                            webp: "./assets/images/Jesus1sss.jpg",

                        },
                        username: "AYISHU",

                    },

                },

                {
                    parent: 2,
                    id: 1,
                    content:
                        "yesu   will be coming",
                    createdAt: "2 days ago",
                    score: 2,
                    replyingTo: "AYISHU",

                    user: {
                        image: {
                            png: "./assets/images/Jesus1sss.jpg",
                            webp: "./assets/images/Jesus1sss.jpg",

                        },
                        username: "Maximilian",

                    },


                },
            ],



        },

    ],

};

function appendFrag(frag, parent){

    let children = [].slice.cell(frag.childNodes, 0);
    parent.appendChild(frag);
    return children[0]
}

const addComment = (body, parentId, replyTo = undefined) =>{
    let commentParent = parentId === 0 ? data.comments : data.comments.filter((c) => c.id == parentId)[0].replies;
    let newComment = {
        parent: parentId,
        id: commentParent.length == 0 ? 1 : commentParent[commentParent.length - 1].id + 1,
        content: body,
        createdAt: "Now",
        replyingTo: replyTo,
        score: 0,
        replies: parent == 0 ? [] : undefined,
        user:data.currentUser,

    }
    commentParent.push(newComment);
    initComments()
}


const deleteComment = (commentObject) => {
    if (commentObject.parent == 0){
        data.comments =data.comments.filter((e) => e != commentObject);
    }
    else{
        data.comments.filter((e) => e.id === commentObject.parent)[0].replies = data.comments.filter((e) => e.id == commentObject.parent)[0].replies;

    }
    initComments()
}

const promptDel = (commentObject) => {

    const modalwrp = document.querySelector(".modal-wrp");
    modalwrp.classList.remove("invisible");
    modalwrp.querySelector(".yes").addEventListener("click", () => {
        deleteComment(commentObject);
        modalwrp.classList.add("invisible");

    })
    modalwrp.querySelector(".no").addEventListener("click", () => {

        modalwrp.classList.add("invisible");
    })
}

const spawnReplyInput = (parent, parentId, replyTo = undefined) => {
    if (parent.querySelectorAll(".reply-input")){
        parent.querySelectorAll(".reply-input").forEach((e) => {
         e.remove()
    })
    }
}


const inputTemplate = document.querySelector(".repl-input-template");
const inputNode = inputTemplate.comment.cloneNode(true);
const addedInput = appendFrag(inputNode, parent);
addedInput.querySelector(".bu-primary").addEventListener("click", () => {

    let commentBody = addedInput.querySelector(".cmnt-input").value;
    if (commentBody.length == 0) return;
    addComment(commentBody, parentId, replyTo)
})




const createCommentNode = (commentObject) => {
const commentTemplate = document.querySelector(".comment-template");
let commentNode = commentTemplate.comment.cloneNode(true);
commentNode.querySelector(".usr-name").textContent = commentObject.user.username;
commentNode.querySelector(".usr-img").src = commentObject.user.image.webp;
commentNode.querySelector(".score-number").textContent = commentObject.score;
commentNode.querySelector('.cmnt-at').textContent = commentObject.createdAt;
commentNode.querySelector(".c-body").textContent = commentObject.content;
if (commentObject.replyingTo){
    commentNode.querySelector(".reply-to").textContent = "@" + commentObject.replyTo;
    commentNode.querySelector(".score-plus").addEventListener("click", () => {
        commentObject.score++;
        initComments();
    })
    commentNode.querySelector(".score-minus").addEventListener("click", () => {
        commentObject.score--;
        if (commentObject.score < 0) commentObject.score = 0;
        initComments()
    })
    if (commentObject.user.username == data.currentUser.username){

        commentNode.querySelector('.comment').classList.add("this-user");
        commentNode.querySelector(".delete").addEventListener("click", () => {
            promptDel(commentObject)

        })
        commentNode.querySelector(".edit").addEventListener("click", (e) => {
            const path = e.path[3].querySelector(".c-body");
            if (path.getAttribute("contenteditable") == false || path.getAttribute("contenteditable") == null){
                path.setAttribute("contenteditable", true);
                path.focus()
            }
            else{
                path.removeAttribute("contenteditable")
            }
        })

        return commentNode;

    }
}return commentNode


}
const appendComment = (parentNode, commentNode, parentId) => {
    const bu_reply = commentNode.querySelector(".reply");
    const appendedCmnt = appendFrag(commentNode, parentNode);
    const replyTo = appendedCmnt.querySelector(".usr-name").textContent;
    bu_reply.addEventListener('click', () => {
        if (parentNode.classList.contains("replies")){
            spawnReplyInput(parentNode, parentId, replyTo)

        }else{
            //spawnReplyInput(appendedCmnt.querySelector(".replies"), parentId, replyTo)

            spawnReplyInput(
                appendedCmnt.querySelector(".replies"), 
                parentId, 
                replyTo);
        }
    });
};

function initComments (commentList = data.comments, parent = document.querySelector(".comments-wrp")){
    parent.innerHTML = "";
    commentList.forEach((element) => {
        let parentId = element.parent == 0 ? element.id : element.parent;
        const comment_node = createCommentNode(element);
        if (element.replies && element.replies.length > 0){
            initComments(element.replies, comment_node.querySelector(".replies"));
        }
         appendComment(parent, comment_node, parentId)
    })
}
initComments();
const cmntInput = document.querySelector(".reply-input");
cmntInput.querySelector(".bu-primary").addEventListener("click", () => {
    let commentBody = cmntInput.querySelector(".cmnt-input").value;
    if (commentBody.length == 0) return;
    addComment(commentBody, 0);
    cmntInput.querySelector(".cmnt-input").value= "";
});










