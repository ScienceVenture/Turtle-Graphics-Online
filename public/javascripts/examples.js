/**
 * Created by sdiemert on 2016-01-23.
 */

function ex1(){
    var s = "\
import turtle\n\
t = turtle.Turtle()\n\
t.speed('fastest')\n\
def tri(l):\n\
    t.forward(l)\n\
    t.left(120)\n\
    t.forward(l)\n\
    t.left(120)\n\
    t.forward(l)\n\
    \n\
x = 1\n\
    \n\
for y in range(50,200,25):\n\
    x = 1\n\
    while x < 20:\n\
        t.left(5)\n\
        tri(y)\n\
        x = x + 1";

    editor.setValue(s);

}


function ex2(){
    var s = "\
import turtle\n\
t = turtle.Turtle()\n\
t.speed('fastest')\n\
def squ(l):\n\
    t.forward(l)\n\
    t.left(90)\n\
    t.forward(l)\n\
    t.left(90)\n\
    t.forward(l)\n\
    t.left(90)\n\
    t.forward(l)\n\
    \n\
x = 1\n\
    \n\
for y in range(50,200,25):\n\
    x = 1\n\
    while x < 20:\n\
        t.left(5)\n\
        squ(y)\n\
        x = x + 1";

    editor.setValue(s);

}

function ex3(){
    var s = "\
import turtle\n\
import random\n\
t = turtle.Turtle()\n\
\n\
t.speed('fastest')\n\
\
x = 1\n\
\
while True:\n\
    t.left(random.randint(20,120))\n\
    t.forward(random.randint(20,50))";

    editor.setValue(s);

}
