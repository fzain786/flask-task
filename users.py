import json
user_list=[ { 'id': '1', 'user': 'bob', 'number': '7236198' },
            { 'id': '2', 'user': 'harry',
'number': '21378123' } ]

class Users():
    def json(self):
        return {'id':self.id,'user':self.user,'number':self.number}

    def add_user(_id,_user,_number,self=None):
        user={'id':_id,'user':_user,'number':_number}
        user_list.append(user)

    def get_all_users(self=None):
        return user_list

    def get_user(_id):
        return [i for i in user_list if (i['id'] == str(_id))]

    def update_user(_id,_user,_number):
        data={'id':_id,'user':_user,'number':_number}
        for i in range(len(user_list)):
            if user_list[i]['id'] == str(_id):
                user_list[i]=data


    def delete_user(_id):
        result = [i for i in user_list if not (i['id'] == str(_id))]
        user_list[:]=result








