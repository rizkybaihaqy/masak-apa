<?php

$makanan = [
    "nasgor" => ["nasi", "cabai", "bawang merah", "bawang putih"],
    "ketoprak" => ["lontong", "cabai", "bawang merah", "bawang putih"]
];

$input = ["nasi", "nasi", "bawang merah", "bawang putih"];

$bobot_item1 = 100 / count($makanan["nasgor"]);
$bobot_item2 = 100 / count($makanan["ketoprak"]);

$hasil1 = 0;
$hasil2 = 0;

for($i = 0; $i < count($input); $i++){
    for($j = 0; $j < count($makanan["nasgor"]); $j++){
        if (($makanan["nasgor"][$j] != 'letoy') && ($makanan["nasgor"][$j] == $input[$i])){
            $makanan["nasgor"][$j] = 'letoy';
            $hasil1 = $hasil1 + $bobot_item1;
        }
    }
}

for($i = 0; $i < count($input); $i++){
    for($j = 0; $j < count($makanan["ketoprak"]); $j++){
        if (($makanan["ketoprak"][$j] != 'letoy') && ($makanan["ketoprak"][$j] == $input[$i])){
            $makanan["ketoprak"][$j] = 'letoy';
            $hasil2 = $hasil2 + $bobot_item2;
        }
    }
}

print_r($hasil1." ");
print_r($hasil2);



// print_r($makanan['nasgor'][0]);




?>