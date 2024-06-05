const users = [ { Name: 'TestRecruitingAdmin TestRecruitingAdmin', UUSID: '999888', Profile: 'Trainer', ManagerUUSID: '999199', Email: '', 'User Registration State': 'ACTIVE', UnifiUserStatus: 'Active', EntityCode: '8841', EntityName: 'Unifi Aviation, LLC', Division: 'MAINT', DivisionDesc: 'MAINT', StationCode: 'CONV', StationDesc: 'Conversion', CustomerCode: 'XY3', CustomerCodeDesc: 'XY3', LineOfService: 'CONV', LineOfServiceDesc: 'History Conversion', PositionCode: 'ALL2TRN', PositionDesc: 'Trainer', JobType: 'Supervisor' }, { Name: 'Evelyn M Perez', UUSID: '8600205', Profile: 'Ramp Agent - Driving', ManagerUUSID: '8622238', Email: 'evelynperez@unifiservice.com', 'User Registration State': 'DELETED', UnifiUserStatus: 'Terminated', EntityCode: '8841R', EntityName: 'Ready Reserve DAL Global Services', Division: 'AVS', DivisionDesc: 'AVS', StationCode: 'PHL', StationDesc: 'Philadelphia', CustomerCode: 'AS', CustomerCodeDesc: 'AS', LineOfService: 'FLHDLG', LineOfServiceDesc: 'Full Handling', PositionCode: 'RD2AGT', PositionDesc: 'Ramp Agent - Driving', JobType: '' }, { Name: 'Robert J Davenport', UUSID: '8600226', Profile: 'Operations Agent', ManagerUUSID: '8744821', Email: 'robert.davenport@unifiservice.com', 'User Registration State': 'DELETED', UnifiUserStatus: 'Terminated', EntityCode: '8841', EntityName: 'Unifi Aviation, LLC', Division: 'AVS', DivisionDesc: 'AVS', StationCode: 'ROC', StationDesc: 'Rochester-NY', CustomerCode: 'DL', CustomerCodeDesc: 'DL', LineOfService: 'FLHDLG', LineOfServiceDesc: 'Full Handling', PositionCode: 'OP2OPAGT', PositionDesc: 'Operations Agent', JobType: '' }, { Name: 'Daniel J Devito', UUSID: '8600295', Profile: 'Ramp Supervisor - Driving', ManagerUUSID: '8744821', Email: 'daniel.j.devito@unifiservice.com', 'User Registration State': 'ACTIVE', UnifiUserStatus: 'Active', EntityCode: '8841', EntityName: 'Unifi Aviation, LLC', Division: 'AVS', DivisionDesc: 'AVS', StationCode: 'ROC', StationDesc: 'Rochester-NY', CustomerCode: 'DL', CustomerCodeDesc: 'DL', LineOfService: 'FLHDLG', LineOfServiceDesc: 'Full Handling', PositionCode: 'RD2SUP', PositionDesc: 'Ramp Supervisor - Driving', JobType: 'Supervisor' }, { Name: 'Leola S Wright', UUSID: '8600385', Profile: 'Gate Grmt Screening Lead', ManagerUUSID: '8692015', Email: 'leola.wright@unifiservice.com', 'User Registration State': 'ACTIVE', UnifiUserStatus: 'Active', EntityCode: '8299', EntityName: 'Unifi Security LLC', Division: 'SEC', DivisionDesc: 'SEC', StationCode: 'ATL5', StationDesc: 'ATL-Midfield Security', CustomerCode: 'DL', CustomerCodeDesc: 'DL', LineOfService: 'GATEGO', LineOfServiceDesc: 'Gate Gourmet', PositionCode: 'GT1LEDSN', PositionDesc: 'Gate Grmt Screening Lead', JobType: 'Supervisor' } ];
const csvUsersErrorLog = [];
const uusidCounts = {};
 
    console.log("Users", users) // 5
    for (const [index, user] of users.entries()) {
        console.log([...users.entries()])
        console.log(index)
        // console.log(user.Email) 
        // console.log(Object.keys(user).length)
        if (Object.keys(user).length != 19) {
            // remove user record
            users.splice(index, 1);
            csvUsersErrorLog.push(user)
            let lastIdx = csvUsersErrorLog.length - 1
 
            csvUsersErrorLog[lastIdx]['ErrorLog'] = 'Corrupted Record'
            csvUsersErrorLog[lastIdx]['ErrorDetails'] = 'Record has corrupted data. Removing it from CSV.'
        } else {
            const { UUSID } = user;
            user.Email = user.Email.trim();
            if (uusidCounts[UUSID]) {
                uusidCounts[UUSID]++;
            } else {
                uusidCounts[UUSID] = 1;
            }
        }
    }
