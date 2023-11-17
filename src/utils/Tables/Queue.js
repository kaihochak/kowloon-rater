/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// Queue.js

const displayLimit = 5;

// Function to change item name
function rename() {
    let oldname = this.textContent;

    // Rename the item
    const inputField = document.createElement('input');
    inputField.className = 'queue-input';
    inputField.value = oldname;
    this.innerHTML = '';
    this.appendChild(inputField);
    inputField.focus();

    inputField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            if (!inputField.value == '') {
                if (oldname == '') {
                    oldname = 'New Item';
                }
                this.innerHTML = oldname;
            } else {
                this.innerHTML = inputField.value;
            }                        
        }
    });

    inputField.addEventListener('blur', () => {
        if (inputField.value == '') {
            if (oldname == '') {
                oldname = 'New Item';
            }
            this.innerHTML = oldname;
        } else {
            this.innerHTML = inputField.value;
        }      
    });
};

function addNewButton(queueContainer) {
    
    // "+ New" button to add new rows
    const addButton = document.createElement('button');
    addButton.className = 'queue-add-button';
    addButton.textContent = '+ New';

    addButton.addEventListener('click', () => {
        
        // Add click event for renaming
        const newRow = createQueueRow("");
        const newItem = newRow.firstChild
        newItem.addEventListener('click', rename);
        
        // Append the new row to the queue
        const queueItems = queueContainer.querySelector('.queue-items');
        queueItems.appendChild(newRow);
 
        // Scroll the new row into view
        newRow.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

        // Focus on the new item
        newItem.click();
        const inputField = newItem.querySelector('.queue-input');
        if (inputField) {
            inputField.focus();
        }
    });

    queueContainer.appendChild(addButton);
}

function createQueueRow(item) {
    // row
    const queueRow = document.createElement('div');
    queueRow.className = 'queue-row';

    // item name
    const queueItem = document.createElement('div');
    queueItem.className = 'queue-item';
    queueItem.textContent = item;

    // Add left-click event for rename
    queueItem.addEventListener('click', rename);

    // Add right-click event for context menu (delete)
    queueItem.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const contextMenu = document.createElement('div');
        contextMenu.className = 'queue-context-menu';
        const deleteOption = document.createElement('div');
        deleteOption.textContent = 'Delete';
        deleteOption.addEventListener('click', () => {
            queueContainer.removeChild(queueRow);
        });
        contextMenu.appendChild(deleteOption);
        queueRow.appendChild(contextMenu);

        // Close the context menu on clicking anywhere else
        window.addEventListener('click', (e) => {
            if (e.target !== queueItem) {
                contextMenu.style.display = 'none';
            }
        });

        contextMenu.style.display = 'block';
    });

    queueRow.appendChild(queueItem);
    return queueRow;
}

function Queue(items) {
    const queueContainer = document.createElement('div');
    queueContainer.className = 'queue-container rankingBoard-cards';
    
    const queueItems = document.createElement('div');
    queueItems.className = 'queue-items';

    items.forEach((item) => {
        const queueRow = createQueueRow(item);
        queueItems.appendChild(queueRow);
    });

    queueContainer.appendChild(queueItems);

    // "+ New" button to add new rows 
    addNewButton(queueContainer);

    return queueContainer;
}

export default Queue;