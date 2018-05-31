
var adversting = 1100;// затраты на рекламу в день
var manager = 300;// затраты на менеджеров

var adverstingmanager = (1100 + 300);// затраты на рекламу и менеджеров в день
var general_expenses = adverstingmanager * 30;
alert (general_expenses);// затраты на рекламу и менеджеров в месяц
var manager_general_expenses = 300* 30;
alert(manager_general_expenses);//месячная затрата на менеджеров за месяц
var adversting_general_expenses = general_expenses - manager_general_expenses;
alert (adversting_general_expenses);//месячная затрата на рекламу

