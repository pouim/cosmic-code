-- Deploy script for Friday at 4:59 PM

UPDATE features
SET status = 'SHIPPED',
    bugs_ignored = true,
    tested_on_prod = true
WHERE 
    mood = 'dangerously_optimistic'
    AND
    deadline_approaching = true
    AND
    coffee_level > 9000;

COMMIT;