const content = document.getElementById(`content`)
const title = document.getElementById(`title`)
const description = document.getElementById(`description`)

const article = document.getElementsByTagName(`article`)[0]

title.textContent = `Belajar JavaScript DOM`
description.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quia.`

console.log(content.id)
console.log(content.className)
console.log(content.tagName)


const h3Article = document.createElement(`h3`)
h3Article.textContent = `Belajar Element Methods Create Element`
article.appendChild(h3Article)

const pArticle = document.createElement(`p`)
pArticle.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus dignissimos aspernatur. Sunt, quae? Eaque accusamus, corporis, obcaecati saepe sint omnis distinctio delectus architecto quod aperiam temporibus numquam nesciunt pariatur voluptatibus, laudantium animi dolores maxime consequuntur. Quia quasi omnis suscipit voluptate ea iusto beatae vero eos qui soluta, repellat dolores voluptatum id, excepturi facere consectetur, autem officia quos doloremque eveniet? Eligendi, odit perspiciatis dolores quasi fugiat similique ipsa eveniet cupiditate assumenda dicta, nam incidunt voluptatibus, doloribus in labore. Alias facilis aut quia earum assumenda nam a ex, optio iusto fugit dolore in sequi architecto ducimus nihil iste dicta soluta odit illum repellendus corrupti debitis tempore adipisci laboriosam. Quaerat vitae recusandae dicta nostrum ad quasi, fugiat, ea impedit delectus laborum dignissimos, veniam tempore alias quibusdam in odit non illo dolorem excepturi rem soluta accusamus modi? Nobis officiis similique ipsa ad excepturi. Culpa fuga sed pariatur libero ipsa voluptatum soluta labore quibusdam modi cumque maiores totam nulla ipsam magnam voluptatem quisquam similique mollitia sequi iusto recusandae, nihil voluptatibus aperiam ducimus! Quibusdam eaque vero dicta libero. Doloremque reiciendis, repudiandae esse nemo quae cupiditate maiores praesentium delectus mollitia, alias officia beatae necessitatibus fugit assumenda quisquam ut architecto aspernatur enim nesciunt? Sed voluptatibus possimus voluptatem.`
article.appendChild(pArticle)