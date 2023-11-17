(function execute(inputs, outputs) {
      
    var individualApproval = false;
    var groupApproval = false;
    var task = false;
    var applicationGr = inputs.app_name;
    //ABAS (AIG-CAD)
    if( applicationGr == "ABAS (AIG-CAD)"){
        outputs.taskgroup = gs.getProperty('AIG_CAD_AS_ABAS_Germany');
        outputs.taskshortdescription = "Data change request for ABAS (AIG-CAD)"
        outputs.onlytaskcreation = true;
    }
    //ADP eTime t
    if( applicationGr == "80d8d8e60f3d0a00b575f18ce1050e79" ) {
        outputs.taskgroup = "4aadca6f0f614a006a6807ace1050eb2";
        outputs.taskshortdescription = "Data Change Request for ADP eTime"
        outputs.onlytaskcreation = true;
    }
    //AS400 CATA (AIG-CAD) Rodano
    if( applicationGr == "edcc4dac1b2c70d0de27ec602a4bcbd3" ) {
        outputs.taskgroup = "5aadca6f0f614a006a6807ace1050efd";
            outputs.taskshortdescription = "Data change request for AIG.CAD.AS.CATA"
            outputs.onlytaskcreation = true;
    }
    //Atlassian Jira
    if( applicationGr == "04d8d8e60f3d0a00b575f18ce1050e79" ) {
        outputs.taskgroup = "29adca6f0f614a006a6807ace1050e5d";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Bridgelogix
    if( applicationGr == "b02f66b08733515840b099f83cbb3542" || applicationGr == "e46987e61b61a1507ce9b845cc4bcb5f" ) {
        outputs.taskgroup = "bead0e6f0f614a006a6807ace1050e58";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    
    }
    //Cognos (LPG) OR Cognos (ADW)
    if( applicationGr == "f44aef4e0f701204521d6509b1050ebc" || applicationGr == "6bed3c250fb0dec0521d6509b1050e24" ) {
        outputs.taskgroup = "c9ad8a6f0f614a006a6807ace1050eea";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Cognos (SDW)
    if( applicationGr == "7cedb4250fb0dec0521d6509b1050e5e" ) {
        outputs.taskgroup = "cdad8a6f0f614a006a6807ace1050ee6";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Cognos EAS (CDW) OR Cognos EAS (EDW) OR Cognos EAS (CDM)
    if( applicationGr == "306e34650fb0dec0521d6509b1050e5c" || applicationGr == "025ef4650fb0dec0521d6509b1050ef1" || applicationGr == "3e4e38250fb0dec0521d6509b1050e77" ) {
            outputs.taskgroup = "bdadca6f0f614a006a6807ace1050e75";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //CORA Sequence (LSG)
    if( applicationGr == "4fa51a4b1b9cec106b6c0d86cc4bcba9" ) {
            outputs.taskgroup = "6cf7747f1b501410b424b845cc4bcb59";
        outputs.taskshortdescription = "Data  Change Request for CORA Sequence (LSG)";
        outputs.onlytaskcreation = true;
    
    }
    //Data Quality EAS
    if( applicationGr == "380fb8650fb0dec0521d6509b1050ef4" ) {
        outputs.taskgroup = "83cac5e10fb45e046b91a218b1050e86";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Databricks
    if( applicationGr == "cab1ff561b7f50d4c82599361a4bcb59" ) {
            outputs.taskgroup = "d8d22671dbabf3c496de7076689619dd";
        outputs.taskshortdescription = "Data change Request for DataBricks";
        outputs.onlytaskcreation = true;
    }
    //Documentum
    if( applicationGr == "90d8d8e60f3d0a00b575f18ce1050e7a" ) {
        outputs.taskgroup = "25adca6f0f614a006a6807ace1050e57";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    
    //Docusphere t
    if( applicationGr == "dfe8fe7d0ff682006b91a218b1050e1d" ) {
        outputs.taskgroup = "a5adca6f0f614a006a6807ace1050e5f";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Choice = e Science .or. Choice = Oracle .or. Choice = JMP/PDW .or. Choice = SpringCM Workflow .or. Choice = WERCS .or. Choice = Genomics .or. Choice = PDW .or. Choice = SAP (MBD) .or. Choice = Active Directory .or. Choice = Maximizer .or. Choice = Grand Island Apps .or. Choice = Stellant  .or. Choice = HubSpan .or. Choice = Transform .or. Choice = Smart Monitor Support .or. Choice = Roami Mobile Monitoring .or. Choice = Business Objects (MBD) .or. Choice = KWE .or. Choice = GCC .or. Choice = SAP (EPM) .or. Choice = EDI .or. Choice = Windows .or. Choice = Get Paid .or. Choice = SAP P46 – (SAP Rochester) .or. Choice = Cforia .or. Choice = IDQ .or. Choice = Q-Pulse .or. Choice = JD Edwards .or. Choice = Vendavo / Smart Pricing .or. Choice = Salesforce.com (ANZ) .or. Choice = TMS .or. Choice = TeamTrack .or. Choice = Chemshare
    if( applicationGr == "dfe8fe7d0ff682006b91a218b1050e1b" || applicationGr == "10d8d8e60f3d0a00b575f18ce1050e7d" || applicationGr == "a67eb6ff0f045ec06b91a218b1050eb2" || applicationGr == "e2a36cfd0f3382c06b91a218b1050ec9" || applicationGr == "31c368fd0f3382c06b91a218b1050eeb" || applicationGr == "6e3e943a0f314a00b575f18ce1050e32" || applicationGr == "77e8fe7d0ff682006b91a218b1050e24") {
        outputs.taskgroup = "10d0b6c10f9cdec06b91a218b1050ee9";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //E1-LSG And no DICAB
    if( applicationGr == "b1d6ef1e0f1c16c0521d6509b1050ee8" && inputs.type_of_data_change != "DICAB Data Update Request" ) {
        outputs.taskgroup = "3dadca6f0f614a006a6807ace1050e86";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //E1-LSG And DICAB
    if( applicationGr == "b1d6ef1e0f1c16c0521d6509b1050ee8" && inputs.type_of_data_change == "DICAB Data Update Request" ) {
        outputs.taskgroup = "35adca6f0f614a006a6807ace1050e7a";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Genesys Call Center Application
    if( applicationGr == "56178cc3dbc7b700856b24f40596192b" ) {
        outputs.taskgroup = "35adca6f0f614a006a6807ace1050e8e";
        outputs.taskshortdescription = "Data change Request for Genesys Call Center Application";
        outputs.onlytaskcreation = true;
    }
    //iConnect
    if( applicationGr == "efe8fe7d0ff682006b91a218b1050e1f" ) {
        outputs.taskgroup = "977295cd0f2b620038d707ace1050e93";
        outputs.taskshortdescription = "Data Change Request for iConnect";
        outputs.onlytaskcreation = true;
    }
    //Intuitive (AIG-CAD)
    if( applicationGr == "1feb85641b2c70d0de27ec602a4bcb21" ) {
        outputs.taskgroup = "5fad0e6f0f614a006a6807ace1050edc";
        outputs.taskshortdescription = "Data change request for Intuitive (AIG-CAD)";
        outputs.onlytaskcreation = true;
    }
    //Lotus Notes (LSG)
    if( applicationGr == "9cd8d8e60f3d0a00b575f18ce1050e7b" ) {
        outputs.taskgroup = "adadca6f0f614a006a6807ace1050e57";
        outputs.taskshortdescription = "Please Review Lotus Notes (LSG) Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Maximo (ULS)
    if( applicationGr == "4e5d3bde6f2e5e405f584cccbb3ee414" || applicationGr == "50bb3b9a6f2e5e405f584cccbb3ee4bc" || applicationGr == "845d3bde6f2e5e405f584cccbb3ee412" || applicationGr == "b16dbfde6f2e5e405f584cccbb3ee404") {
        outputs.taskgroup = "46adca6f0f614a006a6807ace1050ec5";
        outputs.taskshortdescription = "Please complete the Data Change Request ";
        outputs.onlytaskcreation = true;
    }
    //megaTrak WMS (CMD-USROK) OR Syspro (CMD-USROK) line approval and task
    if( applicationGr == "f111f9cc4f79b640b60bd1411310c78e" || applicationGr == "301b78200fd49ec06b91a218b1050eab" ) {
        outputs.taskgroup = "52adca6f0f614a006a6807ace1050ef1";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "No approval group";
    }
    //Navision (DEGER)
    if( applicationGr == "b95c503d0f3382c06b91a218b1050ea6" ) {
        outputs.taskgroup = "daadca6f0f614a006a6807ace1050ef6";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Navision (FBS)
    if( applicationGr == "43ba0ea60fcc5e80521d6509b1050e4f" ) {
        outputs.taskgroup = "53ad0e6f0f614a006a6807ace1050ecf";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //OracleCPQ (SDG-IDD)
    if( applicationGr == "c5a07793db9140508dbf349f9d961946" ) {
        outputs.taskgroup = "6cea0534373823447a43bef543990e54";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //OracleCPQ(CTD)
    if( applicationGr == "ba028929db01a308fc3c71198c961935" ) {
        outputs.taskgroup = "6cea0534373823447a43bef543990e54";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "2b7da48a4f016bcc3103fa95f110c72a";
    }
    //Primertrack/Oiltrack
    if( applicationGr == "9cd8d8e60f3d0a00b575f18ce1050e7c" ) {
        outputs.taskgroup = "a1adca6f0f614a006a6807ace1050e5e";
        outputs.taskshortdescription = "Please complete the Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //PRISM (LCD)
    if( applicationGr == "7a15b48fdb7c5300d00f362f9d96195f" ) {
        outputs.taskgroup = "c9ad8a6f0f614a006a6807ace1050ee0";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //QAD ERP (MSD)
    if( applicationGr == "b35b19090fc2574026126509b1050e79" ) {
        outputs.taskgroup = "6030ee67dbb1d780fc3c71198c96197b";
        outputs.taskshortdescription = "Please Complete Data Change Request for QAD ERP (MSD)";
        outputs.onlytaskcreation = true;
    }
    //Salesforce.com (AIG)
    if( applicationGr == "c7e479840f7f8e806b91a218b1050eda" ) {
        outputs.taskgroup = "4eadca6f0f614a006a6807ace1050ecc";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Salesforce.com (CCG)
    if( applicationGr == "18d8d8e60f3d0a00b575f18ce1050e79" ) {
        outputs.taskgroup = "2b7c73540fbe26c838d707ace1050e3a";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Salesforce.com (SDG)
    if( applicationGr == "83f4fd380f62c2006a6807ace1050e86" ) {
        outputs.taskgroup = "11eb7fd00fbe26c838d707ace1050ea1";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Salesforce.com SFDC (ELMS)
    if( applicationGr == "e407d5374fc853c086bad1411310c741" ) {
        outputs.taskgroup = "88a83b1c0f7e26c838d707ace1050eeb";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //Salesforce.com SFDC (LPD)
    if( applicationGr == "2c1911ff4f0c53c086bad1411310c744" ) {
        outputs.taskgroup = "984803180ff626c838d707ace1050e5f";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //SAP ARTEMIS-PHP
    if( applicationGr == "7d478bd3db235b00fc3c71198c9619de" ) {
        outputs.taskgroup = "d521b9074f00674833ce220f0310c7db";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "No approval group";
    }
    //SAP C11 – (SAP SDG)
    if( applicationGr == "270e1cba0f314a00b575f18ce1050e42" ) {
        outputs.taskgroup = "ed936f2ddb279850fc7f81a9489619ef";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //SAP C4S – (Global Cloud 4 Service)
    if( applicationGr == "de6ba382db1f9348d00f362f9d9619dd" ) {
        outputs.taskgroup = "e282bd614f761b8c33ce220f0310c734";
        outputs.taskshortdescription = "SAP C4S – (Global Cloud 4 Service)";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "No approval group";
    }
    //SAP D50 - (SAP LSG)
    if( applicationGr == "a9a952760f84dac06b91a218b1050e81" ) {
        outputs.taskgroup = "7aec4606dbc104d096de707668961986";
        outputs.taskshortdescription = "SAP D50 - (SAP LSG)";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "No approval group";
    }
    //SAP PR1 – (SAP Thermo Global)
    if( applicationGr == "c04319370ffdca006a6807ace1050eca" ) {
        outputs.taskgroup = "56ad0e6f0f614a006a6807ace1050e06";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //SBM (Serena Business Mgr) (MSD) just one group approval
    if( applicationGr == "f89e57b9db061fc0fc3c71198c9619fb" ) {
        outputs.taskgroup = "b23066a7dbb1d780fc3c71198c961980";
        outputs.taskshortdescription = "Data Change Request for SBM (Serena Business Manager) (MSD)";
        outputs.onlytaskcreation = false;
        outputs.approvalgroup = "f630a6a7dbb1d780fc3c71198c961902";
        outputs.linemanager = false;
    }
    //ServiceMax
    if( applicationGr == "b2d1ccd10fa262c06b91a218b1050e33" ) {
        outputs.taskgroup = "862be0c44f5daec0b60bd1411310c79d";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "No approval group";
    }
    //Syspro (LPD-UKASH)
    if( applicationGr == "204bf0600fd49ec06b91a218b1050e7b" ) {
        outputs.taskgroup = "d7ad0e6f0f614a006a6807ace1050ec9";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "No approval group";
    }
    //Choice = Syspro (LPD-USROK) .or. Choice = megaTrak WMS (LPD-USROK) .or. Choice = Syspro (LPD-USAUB) .or. Choice = Syspro (LPD-USMIA)
    if( applicationGr == "d5e339044fb9b640b60bd1411310c78f" || applicationGr == "4231fdcc4f79b640b60bd1411310c7bc" || applicationGr == "e43bf0600fd49ec06b91a218b1050e7a") {
        outputs.taskgroup = "81ad8a6f0f614a006a6807ace1050ed9";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
        outputs.approvalgroup = "No approval group";
        //validate Syspro (LPD-USAUB), no line manager
        
    }
    //Choice = Syspro (LPD-USROK) .or. Choice = Syspro (CMD-USROK) .or. Choice = Syspro (LPD-USMIA) .or. Choice = megaTrak WMS (CMD-USROK) .or. Choice = Syspro (LPD-UKASH) .or. Choice = ServiceMax .or. Choice = SAP D50 - (SAP LSG) .or. Choice = Syspro (LPD) Auburn .or. Choice = megaTrak WMS (LPD-USROK) .or. Choice = OracleCPQ(CTD) .or. Choice = SAP ARTEMIS-PHP .or. Choice = SAP C4S – (Global Cloud 4 Service) .or. Choice = OSI PI (PSG) CH Lengnau
    //Syspro (LPD) Auburn missing Lengnau t
    if( applicationGr == "b773f9c04fb9b640b60bd1411310c719" ) {
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
    }
    //Trackwise (CTD) t
    if( applicationGr == "f7e8fe7d0ff682006b91a218b1050e24" ) {
            outputs.taskgroup = "57ad0e6f0f614a006a6807ace1050ecb";
        outputs.taskshortdescription = "Data change request for Trackwise (CTD)";
        outputs.onlytaskcreation = true;
    }
    //TrackWise (LSG) t
    if( applicationGr == "1cd8d8e60f3d0a00b575f18ce1050e7a" ) {
            outputs.taskgroup = "a9adca6f0f614a006a6807ace1050e5b";
        outputs.taskshortdescription = "Data Change Request for Trackwise (LSG)";
        outputs.onlytaskcreation = true;
    }
    //Treasure Management System t
    if( applicationGr == "fbe8fe7d0ff682006b91a218b1050e24" ) {
            outputs.taskgroup = "25adca6f0f614a006a6807ace1050e5c";
        outputs.taskshortdescription = "Complete Data Change Request";
        outputs.onlytaskcreation = true;
    }
    //AS400 Rockford PRMS t
    if( applicationGr == "bddbf6910fed22006b91a218b1050e1d" ) {
            outputs.taskgroup = "5fad0e6f0f614a006a6807ace1050ec3";
        outputs.taskshortdescription = "Data Change Request for AS400 Rockford PRMS";
        outputs.onlytaskcreation = true;
    }
    //Asset Data Management (PSG) CH Lengnau t
    if( applicationGr == "a879de0fdbfc81905e293423e2961910" ) {
        outputs.taskgroup = "2fa71ac91b048d502f110d86cc4bcb33";
        outputs.taskshortdescription = "Data change request for Asset Data Management (PSG) CH Lengnau";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
    }
    //GLAMS PRD t
    if( applicationGr == "fcd1644a1bedcd1029b8b845cc4bcbe2" ) {
            outputs.taskgroup = "d21b81881baf34542f110d86cc4bcb43";
        outputs.taskshortdescription = "Data change request for GLAMS PRD";
        outputs.onlytaskcreation = true;
    }
    //PROMIS (LSG) t
    if( applicationGr == "9cd4e2e21bbff8d099770f28cc4bcbe3" ) {
        outputs.taskgroup = "51898b504faa47003103fa95f110c7c5";
        outputs.taskshortdescription = "Data Change Request for PROMIS (LSG)";
        outputs.onlytaskcreation = false;
        outputs.linemanager = true;
    }
    
    //Trackwise (Global PSG) t
    if( applicationGr == "a0c8ab3f1bda8c1485728556cc4bcbae" ) {
        outputs.taskgroup = "dd09e8c50fd793cc26126509b1050ee8";
        outputs.taskshortdescription = "Data change request for Trackwise (Global PSG)";
        outputs.onlytaskcreation = true;
    }
    
     
})(inputs, outputs);
    