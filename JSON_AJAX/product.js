angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    // var d=;
    $scope.listMembers=[
        {id:'101',name:'Udit Gupta',gender:'Male',dob:new Date("July 21,1998").toISOString().slice(0, 10),mobile:7891492201},
        {id:'102',name:'Sopan Sharma',gender:'Male',dob:new Date("November 11,1999").toISOString().slice(0, 10),mobile:785412664},
        {id:'103',name:'Kavish Meena',gender:'Male',dob:new Date("July 27,1999").toISOString().slice(0, 10),mobile:781588996},
        {id:'104',name:'Aparna gaba',gender:'Female',dob:new Date("December 10,1998").toISOString().slice(0, 10),mobile:781166999},
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listMembers[index].name=$scope.name;
        $scope.listMembers[index].gender=$scope.gender;
        $scope.listMembers[index].dob=$scope.dob;
        $scope.listMembers[index].mobile=$scope.mobile;
    }
    $scope.add=function()
    {
        $scope.listMembers.push({
            id:$scope.id,name:$scope.name,gender:$scope.gender,dob:$scope.dob,mobile:$scope.mobile
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listMembers.length;i++)
        if($scope.listMembers[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var member=$scope.listMembers[index];
        $scope.id=member.id;
        $scope.name=member.name;
        $scope.gender=member.gender;
        $scope.dob=member.dob;
        $scope.mobile=member.mobile;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listMembers.splice(index,1);
        }
    };
});