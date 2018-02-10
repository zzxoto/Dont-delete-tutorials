class Left:
    def __init__(self):
        self.x = 'left';
        

class Right:
    def __init__(self):
        self.x = 'right'
        

class Child(Left, Right):
    def __init__(self):
        super().__init__(self)
        print(self.x)           #prints 'left' since the order of resolution depends on the order of the argument provided


class Child2(Left, Right):
    def __init__(self):
        Right.__init__(self)
        print(self.x)           #prints 'right'. In case of multiple inheritance name the class explicitly for desired resolution
                                #Else, as above python will try to resolve in order of argument
