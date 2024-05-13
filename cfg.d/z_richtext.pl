$c->{deps}->{"ingredients/richtext"} = [ "ingredients/jquery" ];

#explicitly specify xapian indexing method
$c->{xapian}->{indexing_methods} = {} unless defined $c->{xapian}->{indexing_methods};
$c->{xapian}->{indexing_methods}->{'EPrints::MetaField::Richtext'} = 'text';
