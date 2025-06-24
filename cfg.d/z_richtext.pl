if ( EPrints->human_version =~ m/^3.4/ )
{
	#explicitly specify xapian indexing method
	$c->{xapian}->{indexing_methods} = {} unless defined $c->{xapian}->{indexing_methods};
	$c->{xapian}->{indexing_methods}->{'EPrints::MetaField::Richtext'} = 'text';
}

# Define HTML entities to support HTML decoding of rich text strings
# E.g. $value =~ s/([&<>"])/$c->{html_entities}->{$1}/g;
$c->{html_entities} = {
    '&' => '&amp;',
    '>' => '&gt;',
    '<' => '&lt;',
    '"' => '&quot;',
};
