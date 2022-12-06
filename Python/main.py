# Cykel Processor
import pypyodbc as odb
#import asyncio
from time import sleep
import threading as th
import keyboard as kb

DRIVER_NAME = 'SQL SERVER'
SERVER_NAME = 'LAPTOP-GABAGO'
DATABASE_NAME = 'JJ'

#uid=<username>;
#pwd=<password>;
connection_string = f"""
    DRIVER={{{DRIVER_NAME}}};
    SERVER={{{SERVER_NAME}}};
    DATABASE={{{DATABASE_NAME}}};
    Trust_Connection=yes;
"""
#conn = odb.connect(connection_string)
#print(conn)

### process _____________
exit_event = th.Event()
coords = [1,2]

def give_cord():
    while(1):
        if exit_event.is_set():
            break
        print(coords)
        sleep(1)

tCord = th.Thread(target=give_cord)
#tCord.daemon = True
tCord.start()

# wait input
s = 0.1
def check_input():
    while(1):
        if kb.is_pressed('a'):
            print('left')
            coords[0] -= 1
            sleep(s)
            #exit_event.set()
        elif kb.is_pressed('d'):
            print('right')
            coords[0] += 1
            sleep(s)
            #exit_event.set()

        if kb.is_pressed('w'):
            print('up')
            coords[1] += 1
            sleep(s)
            #exit_event.set()
        elif kb.is_pressed('s'):
            print('down')
            coords[1] -= 1
            sleep(s)
            #exit_event.set()

        if kb.is_pressed('x'):
            exit_event.set()

tInput = th.Thread(target=check_input)
tInput.daemon = True
tInput.start()