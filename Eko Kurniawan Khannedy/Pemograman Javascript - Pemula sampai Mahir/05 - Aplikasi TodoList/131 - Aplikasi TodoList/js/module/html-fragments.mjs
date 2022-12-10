export const htmlDisplayList = (value, index) => {
    return `<tr>
                    <td><button type="button" class="btnList" value="${index}">Done</button></td>
                    <td>${value}</td>
                </tr>`
}