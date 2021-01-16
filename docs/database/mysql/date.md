SELECT COUNT(1) FROM item WHERE created_time >= '2019-07-22' AND created_time <= '2019-07-29'

-- SELECT COUNT(1) FROM item WHERE created_time BETWEEN '2019-07-22' AND DATE_ADD('2019-07-29', INTERVAL 1 DAY)



-- DATE_ADD('2019-07-29', INTERVAL 1 DAY)
-- DATE_ADD({{endDate}}, INTERVAL 1 DAY)

>= and between



distinct