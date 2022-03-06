// '''''''''''''''''''''''...............................................
// '.....................................................................
// '..,cllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllc;...
// '..;ddlllllllllllllllllllllccccccccccccccccccccccccccccccccccccclxl'..
// '..:dc,,,;;;;;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''''''''''''''''...'ol'..
// '..:dc,,:llllllllllllllllllllllllllllllllllllllllllllllllllllc,.'ol'..
// '..:dc,,cooooooooooooooooooooooooooooooooooooooooooooooooooool,.'ol'..
// '..:dc,,cloooooooooooooooooooooooooooooooooooooooooooooooooool,.'ol'..
// '..:dc,,cooooooooooooooooooooooooooooooooooooooooooooooooooool,.'ol'..
// '..:dc,,cloooooooooooooooooooooooooooooooooooooooooooooooooool,.'ol'..
// '..:dc,,cooooooooooooooooooooooooooooooooooooooooooooooooooool,.'ol'..
// '..:dc,,:ccccccccccccccccccccccccccccccccccccccccccccccccc:cc:'.'ol'..
// '..:dl,,,,,,,,,,,,,,,,,,,,,,,,,''''''''''''''''''''''''.........,ol'..
// '..:dxdooooooooooooooooooooooooooooooooooooooooooooooooooooooooodxl...
// '..;xkxdddddddddxkxddddddddddkkxddddddddddxkkxddddddddddddddddddxkl'..
// '..;xd,'';:c;...:xl;,,,,'''',lxc,,,,,''''.;dd:,,,,,,,''''''''..'cxl'..
// '..;do,'',ld:...:xl,,:dlc;...ld:','',;,...'od;,,,'''';;'........;xl'..
// '..;do,'',ld:...:dl,,;lodo:..ld:',,,cdl'..'od;,,,''',lc'........;xl'..
// '..;xo;'',lc....:xl,,';:cl:..cd:'',,,,,'..'od;,,,''';c;.........;xl'..
// '..:xd,''','....:xl,''''....'lxc'''''.....,od;','''''''.........:xl'..
// '..;xxdodoooooooxkxolllllllloxkdlllllllllloxkdlllllllllllllllllldkl'..
// '..;xxc:::::::;:okdc::::::;;:dxo::::::::;;cxxl:::::::::::;;;;;;:lkl'..
// '..:xo,'';:c;...:xl,',:c:,...ld:'',;:c;'..'od;',''''',,,'.......:xl'..
// '..:xo,'',ld:...:xl,',oOx:...cd:'';ldOx;..'od;,,,''''cxo,.......:xl'..
// '..;xo;'',lc....:xl,',lxd:...ld:'',:lxo,..'od;,,,'''':ol,.......;xl'..
// '..;xo,''','....:xl,'',,,....ld:'''',,'...'od;,,,''''''.........:xl'..
// '..;xxc:::::;;;:okdc::::::;;:dxo::::::;;;;cxxl:::::::::::;;;;;;:lxl'..
// '..;xxollllllllldkxolllllllloxkdlllllllllloxkdlllllllllllllllllldkl'..
// '..;xo;'''','...:xl,'',;;'..'lxc'''',;,...,od;',''''''..........:xl'..
// '..;xo;'',lxc...:xl,,,lkd;...cd:'';cdko,..'od;',,'''',,'........;xl'..
// '..;xo;',cxko'..:xl,',cdxc...ld:'':lxOd;..'od;',,'''';:,........;xl'..
// '..;xo;'',;:;...:dl,'';c:'...cd:'',,;c;'..'od;',,'''''..........;xl'..
// '..;xd:,,,''''.'cxl;,,,''''.,lxc,,,,'''''.;dd:,,,,,,,''''''''..'cxl'..
// '..;xkdollllllloxkxollollllloxkxollllllllldkkdolllllllllllllllloxkl'..
// '..:xd:;;,,,,,',lxo;;;,,,,,';oxl;;;,,,,,,':dxc;;;;;,,,,,,,,,''',cxl'..
// '..;xo;'',cc,...:xc,',:ll;...cd:'',;:lc'..'od;,,,'''',::'.......;xl'..
// '..:xo;'',ox;...:xl,,,:od:...ld:'',;:od;..'od;,,,'''':do,.......;xl'..
// '..;xo;''';l,...:xl,',col,...lx:'',;:ol,..'od;,,,''''','........;xl'..
// '..;xo;'''''....:xl,'''''....lx:''''''....,od;''''''''..........:xl'..
// '..;xxolccccccccdkxlcccccccclxkdlccccccccclxxolcccccccccccccccccdkl'..
// '..;xxlccccc:::cokdlcccccc::cdkdllllllllllllcccccccccccccccc:::cokl'..
// '..;xo;'',::,...:xl,'''......ldc:ccc:::::;;;;;;,,,,,'''''.......:xl'..
// '..;xo,',lddo'..:dl,''',,....cdc:ccccc::::;;;;:lol;,,'''''......:xl'..
// '..:xo,',cddl'..:dl,''',,....cdc:cccc::::::;;;:lol;,,'''''......:xl'..
// '..:xo;'',;;'...:xl,''''.....cdc:ccccc:::::;;;;;,,,,,''''.......:xl'..
// '..;xdc;;;;;,,,,lko:;;;;;,,,;oxoccccccccc::::::::::;;;;;;;;;;,,;lxl'..
// '..;oddooooooooodddoooooooooodddooooooooooooooooooooooooooooooooddc...
// '..,::cc:,''''''''''''',;:::;;::::::::::c:::::::::::::::::::::;;::'...
// '..''''''...............'''''.''''''''..''......'..''''...............




// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;


import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./CalcLib.sol";

contract Calculator is ERC721Enumerable, ERC2981, Ownable {
    using Counters for Counters.Counter;
    
    uint public price;
    uint public maxAmount;

    uint96 public royaltyPercentage = 4;


    string public officialFrontEnd;

    CalcLib.ColorScheme[] public colorSchemes;

    mapping(uint => uint) internal idToSchemeIndex;


    

    event TokenMint(address purchaser);
    Counters.Counter private _tokenIdCounter;


    constructor() ERC721("Calculator", "CALC") {
        maxAmount = 10000;
        _setDefaultRoyalty(address(this), royaltyPercentage);

        colorSchemes.push(CalcLib.ColorScheme(
            ["f07167", "ff8b6d"],
            ["0081a7", "00afb9"],
            ["f07167", "ff8b6d"],
            ["fdfcdc", "fbffdd"],
            "fed9b7",
            "7b323a",
            "d8e1e0",
            "1e1e1e",
            "fdfcdc",
            "303133"
            ));

        colorSchemes.push(CalcLib.ColorScheme(
            ["353226","817a5c"],
            ["2c2c2c","525252"],
            ["e98151","ffaf5c"],
            ["292929","373737"],
            "beb087",
            "7b323a",
            "d8e1e0",
            "d8e1e0",
            "88897b",
            "d8e1e0"
            ));
        colorSchemes.push(CalcLib.ColorScheme(
            ["22333b","4e7587"],
            ["0a0908","564d44"],
            ["22333b","4e7587"],
            ["5e503f","847058"],
            "c6ac8f",
            "c6ac8f",
            "eae0d5",
            "2b241c",
            "eae0d5",
            "eae0d5"
            ));
        colorSchemes.push(CalcLib.ColorScheme(
            ["9e2a2b","9e2a2b"],
            ["9e2a2b","9e2a2b"],
            ["9e2a2b","9e2a2b"],
            ["fff3b0","fff3b0"],
            "fff3b0",
            "7b323a",
            "f0f0c9",
            "3c241c",
            "f0f0c9",
            "3c241c"
            ));





        colorSchemes.push(CalcLib.ColorScheme(
            ["ffadad","ffadad"],
            ["fdffb6","fdffb6"],
            ["ffd6a5","ffd6a5"],
            ["caffbf","caffbf"],
            "9bf6ff",
            "f5cac3",
            "bdb2ff",
            "bdb2ff",
            "fffffc",
            "bdb2ff"
            ));

        price = 0.03 ether;

    }

    function setFrontEnd(string memory url) public onlyOwner {
        officialFrontEnd = url;
    }

    function mint(uint[] memory schemeIndexes) public payable {
        require(schemeIndexes.length > 0);
        uint totalMints = schemeIndexes.length;
        uint totalPrice = totalMints * price;
        require(msg.value == totalPrice,"send correct amount");
        require(totalMints <= 5, "too many mints :(");
        require(_tokenIdCounter.current() + totalMints <= maxAmount, "at limit");
        for(uint i=0; i<totalMints; i++) {
            require(schemeIndexes[i]<=4, "color doesn't exist");
            _tokenIdCounter.increment();
            uint256 newItemId = _tokenIdCounter.current();
            idToSchemeIndex[newItemId] = schemeIndexes[i];
            _safeMint(msg.sender, newItemId);
        }

        emit TokenMint(msg.sender);

    }

    function withdrawFunds() public onlyOwner {
        uint amount = address(this).balance;

        Address.sendValue(payable(owner()), amount);
    }

    function currentSupply() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    // function base64ImageUri(uint256 id) public view returns (string memory) {

    //     address owner = ownerOf(id);
    //     require(_exists(id), "not exist");
    //     CalcLib.ColorScheme memory scheme = idToScheme[id];

    //     return CalcLib.base64ImageOnly(owner, id, scheme);

    //     // string memory svg = CalcLib.svgURI(owner, id, colorSchemes[0]);

    //     // return svg;

    // }


    function tokenURI(uint id) public view override returns(string memory) {
        address owner = ownerOf(id);
        require(_exists(id), "not exist");
        uint schemeIndex = idToSchemeIndex[id];
        CalcLib.ColorScheme memory scheme = colorSchemes[schemeIndex];

        return CalcLib.generateTokenURI(owner, id, schemeIndex, scheme, officialFrontEnd);


    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC2981, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId) internal virtual override {
        super._burn(tokenId);
        _resetTokenRoyalty(tokenId);
    }







}