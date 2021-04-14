
    const URL = ' https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'

    fetch(URL)
        .then((data) => data.json())
        .then((ids) => {
            console.log(ids)
            for (const id of ids) {
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    .then(details => details.json())                 
                    .then(details => {
                        // console.log(details)
                        
                        //new container div for each story
                        const parent1 = document.createElement('div')
                        parent1.className = 'titles-container'

                        const child1 = document.createElement('a')
                        child1.innerHTML = `<p>${details.title}<p>`
                        child1.href = `${details.url}`
                        child1.className = 'titles'
                        parent1.append(child1)

                        //new span element to keep details inline
                        const parent2 = document.createElement('span')
                        parent2.id = 'details'

                        const child2 = document.createElement('p')
                        child2.innerText = details.score + ' points by '
                        child2.className = 'scores'
                        parent2.append(child2)

                        const child3 = document.createElement('a')
                        child3.innerHTML = `<p>${details.by}</p>`
                        child3.className = 'user'
                        child3.href = `https://news.ycombinator.com/user?id=${details.by}`
                        parent2.append(child3)

                        const child4 = document.createElement('a')
                        child4.innerText = ` 2 hours ago `
                        child4.className = 'time'
                        parent2.append(child4)

                        const child5 = document.createElement('a')
                        child5.innerText = 'hide'
                        child5.href = `https://news.ycombinator.com/hide?id=${details.by}&goto=news`
                        child5.className = 'hide'
                        parent2.append(child5)

                        const child6 = document.createElement('a')
                        child6.innerHTML = `<p>${details.descendants} comments</p>`
                        child5.href = `https://news.ycombinator.com/item?id=${id}`
                        child6.className = 'comments'
                        parent2.append(child6)

                        const element = document.querySelector('.list-ctn')
                        parent1.append(parent2)
                        element.append(parent1)

                        // const commentBtn = document.querySelector('.comments')
                        // commentBtn.addEventListener('click', () => {
                        //     const kidsArray = details.kids
                        //     for (let id of kidsArray) {
                        //         fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                        //             .then(comments => comments.json())
                        //             .then(comments => {
                        //             console.log(comments.text[0])
                        //         })
                        //     }
                        // })
                        
                })            
            }
        })
    
