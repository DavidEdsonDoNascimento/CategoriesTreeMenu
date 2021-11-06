const categories = [
    { id: 1, name: "Desktops", parent_id: 3 },
    { id: 3, name: "Computers", parent_id: 8 },
    { id: 4, name: "Smartphones", parent_id: 6 },
    { id: 6, name: "Portables", parent_id: 3 },
    { id: 7, name: "Tablets", parent_id: 6 },
    { id: 8, name: "Electronics", parent_id: null },
    { id: 18, name: "Camping", parent_id: null },
    { id: 10, name: "TV", parent_id: 8 },
    { id: 20, name: '11 pol', parent_id: 7 },
    { id: 13, name: "Remotes", parent_id: 14 },
    { id: 14, name: "Accessories", parent_id: 10 }
]

const divRoot = document.getElementById('category-tree')
const mainMenu = document.createElement('ul')

const getCategoryTree = () => {
    
    const firstLevel = categories.filter(item => !item.parent_id)
    
    const levelsFormmated = firstLevel.map(recursiveFormatForChildren)

    levelsFormmated.forEach(li => mainMenu.append(li))

    divRoot.append(mainMenu)
}

const createItemOfList = (name) => {
    const li = document.createElement('li')
    li.innerHTML = name
    return li
}

const recursiveFormatForChildren = (item) => {
    
    const li = createItemOfList(item.name)

    const childrens = categories.filter(children => children.parent_id === item.id)
    
    if (!childrens.length > 0) {
        return li;
    }
    
    // classe identificadora de item com filhos
    li.classList.add('has-children')
    // add evento de sanfona
    li.addEventListener('click', event => {
        event.stopPropagation();
        event.target.classList.toggle('open')
    })

    const subMenu = document.createElement('ul')

    const childrensFormmated = childrens.map(recursiveFormatForChildren)
    childrensFormmated.forEach(li => subMenu.append(li))

    li.append(subMenu)

    return li;
}

export default getCategoryTree;