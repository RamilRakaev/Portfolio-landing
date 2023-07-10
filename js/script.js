const buttons = document.getElementsByClassName('btn-page');
const items = Array.from(document.querySelectorAll('.scroll-item'));
let item = 0;
switchPage(0);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        hideItems();
        switchPage(i);
        toggleActiveClass(event.target)
    })
}

function toggleActiveClass(item) {
    document.querySelector('.btn-page-active').classList.toggle('btn-page-active');
    item.classList.add('btn-page-active');
}

function hideItems() {
    for (const item of items) {
        item.style.display = 'none';
    }
}

function switchPage(page) {
    //������ ������ �������� � vw
    let itemWidthInVw = 16;
    //������ ������ �������� � px
    let itemWidth = document.documentElement.offsetWidth / 100 * itemWidthInVw;
    //������ �������
    let scrollWidth = document.querySelector('.scroll').offsetWidth;

    //������������ � ��������, �� ������� ����� ���������� ��������
    let availableSpace = scrollWidth;
    //������������, ������� ���� ���������� ������, ��� �������� ����������
    let shiftSpace = scrollWidth * page;

    console.clear();
    //������� �������� �������, ������� ����� ����������
    for (const item of items) {
        itemWidth = parseInt(getComputedStyle(item).width);

        console.log('scrollWidth:', scrollWidth)
        console.log('availableSpace:', availableSpace)
        console.log('shiftSpace:', shiftSpace)
        console.log('itemWidth:', itemWidth)
        console.log('page:', page)
        console.log('')
        if (shiftSpace > itemWidth) {
            shiftSpace -= itemWidth;
            continue;
        }

        if (availableSpace >= itemWidth) {
            availableSpace -= itemWidth;
            item.style.display = 'flex';
        }
        else {
            break;
        }
    }
}