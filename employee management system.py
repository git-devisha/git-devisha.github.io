import pymysql as sql
import sys
con = sql.connect(host="127.0.0.1", user="root", password="sql", database="empdb", charset="utf8")
def insertRecord():
    id=int(input("enter employee id- "))
    name = input("name:")
    gender = input("gender:")
    email = input("email:")
    date = input("date:")
    dept = input("dept:")
    password = input("password:")
    
    cur=con.cursor()
    qry="insert into empinfo values(%d,'%s', '%s','%s', '%s','%s','%s')"%(id, name, gender, email,date, dept, password)
    print(qry)
    cur.execute(qry)
    if cur.rowcount==1:
        print("inserted")
    else:
        print("error")
    con.commit()
def deleteRecord():
    id = int(input("enter id:"))
    qry= f"delete from empinfo where eid(id)"
    cur= con.cursor()
    cur.execute(qry)
    con.commit()
    if cur.rowcount==1:
        print("inserted")
    else:
        print("error")
def updateRecorde():
    id=int(input("employee id:"))
    cur=con.cursor()
    cur.execute(f"select *from empinfo where eid=(id)")
    if cur.rowcount ==1:
        print("press 1 to update name:")
        print("press 2 to update gender:")
        print("press 3 to update email:")
        print("press 4 to update date:")
        print("press 5 to update dept:")
        print("press 6 to update password:")
        print("press 7 to update previous menu:")
        ch = int(input("enter choice:"))
        if ch==1:
            name = input("enter name:")
            qry = f"update empinfo set name='{name}' where eid ={id}"
            
        elif ch==2:
            name = input("enter name:")
            qry = f"update empinfo set gender='{gender}' where eid ={id}"
        elif ch==3:
            name = input("enter name:")
            qry = f"update empinfo set email='{email}' where eid ={id}"
        elif ch==4:
            name = input("enter name:")
            qry = f"update empinfo set date='{date}' where eid ={id}"
        elif ch==5:
            name = input("enter name:")
            qry = f"update empinfo set dept='{dept}' where eid ={id}"
        elif ch==6:
            name = input("enter name:")
            qry = f"update empinfo set dept='{dept}' where eid ={id}"
        else:
            pass
        if ch<7:
            cur.execute(qry)
            if cur.rowcount==1:
                print("record updated")
            else:
                print("updation failed")
        else:
            print("invalid employee id")
        
def displayRecord():
    qry = 'select * from empinfo'
    cur= con.cursor()
    cur.execute(qry)
    if cur.rowcount !=0:
        print(cur.fetchone())
        print(cur.fetchone())
        print(cur.fetchone())
    else:
        print("no record")
while True:
    print("press 1 to insert")
    print("press 2 to update")
    print("press 3 to delete")
    print("press 4 to display")
    print("press 5 to exit")
    choice= int(input("choice:"))
    if choice ==1:
       insertRecord()
    elif choice ==2:
       updateRecord()
    elif choice == 3:
       deleteRecord()
    elif choice==4:
       displayRecord()
    else:
       sys.exit
    


con.close()
