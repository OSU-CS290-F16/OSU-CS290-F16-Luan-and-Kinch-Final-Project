function main() {
    displayContents();
    dynamicDateTime();
}

function displayContents() {
    var mainBox = document.getElementById('main-container');

    for (var i = 0; i < 5; i ++) {
        var contatiner = createMainSection(mainBox, 'Section Title ' + (i + 1), i % 2 == 0);

        for (var j = 0; j < 6; j ++) {
            createSectionTable(contatiner, i % 2 == 0);
        }
    }
}

function createMainSection(box, text, flag) {
    var section = document.createElement('section');
    section.setAttribute('id', 'main-container');
    section.style.backgroundColor = flag ? "ghostwhite" : "crimson";
    box.appendChild(section);

    var title = document.createElement('h2');
    title.innerHTML = text;
    title.style.color = flag ? 'crimson' : 'ghostwhite';
    section.appendChild(title);

    var container = document.createElement('div');
    container.setAttribute('class', 'main-section-container');
    section.appendChild(container);

    return container;
}

function createSectionTable(container, flag) {
    var section = document.createElement('section');
    section.setAttribute('class', 'main-content-section');

    if (flag) {
        section.style.backgroundColor = 'crimson';
        section.style.borderColor = 'ghostwhite';
    } else {
        section.style.backgroundColor = 'ghostwhite';
        section.style.borderColor = 'crimson';
    }

    container.appendChild(section);
}

function dynamicDateTime() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var week = date.getDay();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	document.getElementById("date-time").innerHTML = year + "-" + bitFormat(month) + "-" + bitFormat(day) + "\t" + weekFormat(week) + "\t" + bitFormat(hour) + ":" + bitFormat(minute) + ":" + bitFormat(second);
	setTimeout(dynamicDateTime, 1000);
}

function bitFormat(num) {
	return (num < 10) ? "0" + num : num;
}

function weekFormat(num) {
	switch(num) {
		case 0:
			return "Sun";
		case 1:
			return "Mon";
		case 2:
			return "Tue";
		case 3:
			return "Wed";
		case 4:
			return "Thu";
		case 5:
			return "Fri";
		case 6:
			return "Sat";
	}
}
