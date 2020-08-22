var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '555px',
    selectedDate: new Date(2020, 2, 1),
    views: [
        { option: 'TimelineDay', orientation: 'Vertical' },
        { option: 'TimelineWeek', orientation: 'Vertical', isSelected: true },
        { option: 'TimelineWorkWeek', orientation: 'Vertical' },
    ],
    eventSettings: {
        dataSource: [
            {
                Id: 1,
                Subject: 'Testing - 1',
                StartTime: new Date(2020, 2, 2, 10),
                EndTime: new Date(2020, 2, 2, 12, 30)
            },
            {
                Id: 2,
                Subject: 'Testing - 2',
                StartTime: new Date(2020, 2, 3, 12),
                EndTime: new Date(2020, 2, 3, 14)
            },
            {
                Id: 3,
                Subject: 'Testing - 3',
                StartTime: new Date(2020, 2, 4, 15),
                EndTime: new Date(2020, 2, 4, 16, 30)
            },
            {
                Id: 4,
                Subject: 'Testing - 4',
                StartTime: new Date(2020, 2, 5, 10),
                EndTime: new Date(2020, 2, 5, 11)
            },
            {
                Id: 5,
                Subject: 'Testing - 5',
                StartTime: new Date(2020, 2, 6, 9, 30),
                EndTime: new Date(2020, 2, 6, 10, 30)
            }
        ]
    }
});
scheduleObj.appendTo('#schedule');
