//Conditional color set if user proceeds to enter information without a date in cloumn B

=(ISBLANK(B:B)) * (ISTEXT(E:E))
