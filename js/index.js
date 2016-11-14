function main() {
    displayContents();
    dynamicDateTime();
}

function displayContents() {
    var mainBox = document.getElementById('main-container');

    for (var i = 0; i < 2; i ++) {
        var contatiner = createMainSection(mainBox);

        for (var j = 0; j < 3; j ++) {
            createSectionTable(contatiner, i % 2 == 0);
        }
    }
}

function createMainSection(box, flag) {
    var section = document.createElement('section');
    section.setAttribute('id', 'main-container');
    section.style.backgroundColor = flag ? "ghostwhite" : "#CF6766";
    box.appendChild(section);

    var container = document.createElement('div');
    container.setAttribute('class', 'main-section-container');
    section.appendChild(container);

    return container;
}

function createSectionTable(container, flag) {
    var section = document.createElement('section');
    section.setAttribute('class', 'main-content-section');

    if (flag) {
        section.style.backgroundColor = '#30415D';
        section.style.borderColor = 'ghostwhite';
    } else {
        section.style.backgroundColor = 'ghostwhite';
        section.style.borderColor = '#30415D';
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
